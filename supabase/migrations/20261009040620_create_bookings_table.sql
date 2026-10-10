/*
# Create bookings table for Kim Thủy Spa appointment requests

1. New Tables
- `bookings`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — customer's full name
  - `phone` (text, not null) — customer's phone number
  - `service` (text, not null) — preferred treatment/service
  - `appointment_date` (date, not null) — requested appointment date
  - `notes` (text, nullable) — optional additional notes from the customer
  - `status` (text, not null, default 'pending') — booking status: pending, confirmed, completed, cancelled
  - `created_at` (timestamptz, default now()) — when the booking request was submitted

2. Security
- Enable RLS on `bookings`.
- This is a no-auth public-facing landing page: the anon-key client must be able to INSERT new booking requests.
- INSERT allowed for anon + authenticated (public submission form).
- SELECT/UPDATE/DELETE restricted to authenticated (spa staff managing bookings).
- This ensures anyone can submit a booking request, but only authenticated staff can view or manage them.
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  service text NOT NULL,
  appointment_date date NOT NULL,
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow public (anon) to submit new booking requests
DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings"
ON bookings FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated staff can view bookings
DROP POLICY IF EXISTS "auth_select_bookings" ON bookings;
CREATE POLICY "auth_select_bookings"
ON bookings FOR SELECT
TO authenticated
USING (true);

-- Only authenticated staff can update bookings
DROP POLICY IF EXISTS "auth_update_bookings" ON bookings;
CREATE POLICY "auth_update_bookings"
ON bookings FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

-- Only authenticated staff can delete bookings
DROP POLICY IF EXISTS "auth_delete_bookings" ON bookings;
CREATE POLICY "auth_delete_bookings"
ON bookings FOR DELETE
TO authenticated
USING (true);
