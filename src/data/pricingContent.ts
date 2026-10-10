export type PriceOption = {
  duration: number; // phút
  price: string; // "399k"
};

export type PricingItem = {
  id: string;
  name: string;
  description?: string;
  options: PriceOption[];
  badge?: string;
};

export type Commitment = {
  title: string;
  subtitle: string;
};

export const pricingItems: PricingItem[] = [
  {
    id: 'g01',
    name: 'Gói Cơ Bản',
    description: 'Vai, Thận, Gan',
    options: [{ duration: 60, price: '399k' }],
  },
  {
    id: 'g02',
    name: 'Gói Chuyên Sâu',
    description: 'Vai, Thận, Gan, Ty Vị, Phổi, Tim, Ôn Kinh Chân, Tay',
    options: [{ duration: 90, price: '599k' }],
  },
  {
    id: 'g03',
    name: 'Liệu Trình Phụ Khoa',
    description: 'Chỉ dành cho Nữ',
    badge: 'Nữ',
    options: [{ duration: 90, price: '699k' }],
  },
  {
    id: 'g04',
    name: 'Body Thư Giãn',
    options: [
      { duration: 60, price: '299k' },
      { duration: 90, price: '399k' },
    ],
  },
  {
    id: 'g05',
    name: 'Body Thư Giãn Đá Nóng',
    options: [
      { duration: 60, price: '399k' },
      { duration: 90, price: '499k' },
    ],
  },
  {
    id: 'g06a',
    name: 'Chăm Sóc Chân',
    options: [{ duration: 60, price: '399k' }],
  },
  {
    id: 'g06b',
    name: 'Chăm Sóc Tay',
    options: [{ duration: 60, price: '399k' }],
  },
  {
    id: 'g07',
    name: 'Gội Đầu Dưỡng Sinh Chuẩn Trung Hoa',
    options: [{ duration: 60, price: '199k' }],
  },
  {
    id: 'g08',
    name: 'Gội Sạch',
    options: [{ duration: 40, price: '79k' }],
  },
  {
    id: 'g09',
    name: 'Gội Đầu Dsinh + Full Face + CVG',
    options: [{ duration: 90, price: '399k' }],
  },
  {
    id: 'g10',
    name: 'Gội Đầu Dsinh + Đau Đầu Mất Ngủ',
    options: [{ duration: 90, price: '399k' }],
  },
  {
    id: 'g11',
    name: 'Gội Đầu Dsinh + CVG',
    options: [{ duration: 90, price: '299k' }],
  },
  {
    id: 'g12',
    name: 'Gội Đầu Dsinh + CVG + Massage Chân + Ngâm Chân',
    options: [{ duration: 110, price: '449k' }],
  },
  {
    id: 'g13',
    name: 'Mặt Nạ Đông Giá',
    options: [{ duration: 0, price: '40k' }],
  },
  {
    id: 'g14',
    name: 'Ngâm Chân Thảo Mộc',
    options: [{ duration: 0, price: '100k' }],
  },
  {
    id: 'g15',
    name: 'CGM (Nâng Cơ Mặt bằng Ngọc Thạch)',
    options: [{ duration: 75, price: '399k' }],
  },
  {
    id: 'g16',
    name: 'Cạo Nửa Trán',
    options: [{ duration: 30, price: '159k' }],
  },
  {
    id: 'g17',
    name: 'Cứu Ấm – Giải Cảm – Bài Phong Tán Hàn',
    options: [{ duration: 60, price: '399k' }],
  },
  {
    id: 'g18',
    name: 'Trượt Giác – Giác Hơi Bài Độc',
    options: [{ duration: 40, price: '299k' }],
  },
  {
    id: 'g19',
    name: 'Bài Gió – Giác Bổ',
    options: [{ duration: 40, price: '299k' }],
  },
  {
    id: 'g20',
    name: 'Chăm Sóc C.Sâu Vùng Đầu',
    options: [{ duration: 60, price: '299k' }],
  },
  {
    id: 'g21',
    name: 'Liệu Pháp Cứu Ấm – Xông Ngải Cứu',
    options: [{ duration: 70, price: '399k' }],
  },
  {
    id: 'g22',
    name: 'Liệu Pháp Bài Trừ Hàn Ấm – Cứu Ấm Cơ Thể',
    options: [{ duration: 70, price: '399k' }],
  },
  {
    id: 'g23',
    name: 'Chăm Sóc Thư Giãn Cho Mẹ Bầu',
    badge: 'Mẹ Bầu',
    options: [
      { duration: 60, price: '299k' },
      { duration: 90, price: '459k' },
    ],
  },
];

export const commitments: Commitment[] = [
  { title: 'Thảo dược thiên nhiên', subtitle: 'An toàn, lành tính' },
  { title: 'Kỹ thuật chuyên sâu', subtitle: 'Hiệu quả, thư giãn' },
  { title: 'Không gian riêng tư', subtitle: 'Sạch sẽ, yên tĩnh' },
  { title: 'Tận tâm phục vụ', subtitle: 'Chăm sóc từ tâm' },
];

export const pricingContact = {
  hotline: '093.117.9907',
  hotlineRaw: '0931179907',
  contactName: 'Hiền',
  zalo: '0931179907',
  address: '1041/62/23C Trần Xuân Soạn, P. Tân Hưng, Quận 7',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=1041/62/23C+Trần+Xân+Soạn+Tân+Hưng+Quận+7+Ho+Chi+Minh',
  hours: 'Thứ 2 – Chủ Nhật (11:00 – 20:00)',
  note: 'Vui lòng đặt lịch trước giúp em ạ ♥',
};
