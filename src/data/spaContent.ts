import {
  Sparkles,
  Flower2,
  Heart,
  Gem,
  Leaf,
  HandHeart,
  Droplets,
  Sun,
  type LucideIcon,
} from 'lucide-react';

export type Treatment = {
  id: string;
  name: string;
  vietnamese: string;
  description: string;
  image: string;
  duration: string;
  icon: LucideIcon;
};

export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Testimonial = {
  name: string;
  location: string;
  text: string;
  rating: number;
  initials: string;
};

export type Offer = {
  badge: string;
  title: string;
  description: string;
  price: string;
  originalPrice: string;
  features: string[];
  featured: boolean;
};

export type GalleryImage = {
  src: string;
  alt: string;
  span: 'tall' | 'wide' | 'normal';
};

export const treatments: Treatment[] = [
  {
    id: 'gội-đầu-dưỡng-sinh',
    name: 'Gội Đầu Dưỡng Sinh',
    vietnamese: 'Chuẩn Trung Hoa',
    description: 'Gội đầu dưỡng sinh chuẩn Trung Hoa với kỹ thuật bấm huyệt đầu, cổ vai gáy giúp thư giãn toàn thân, giảm đau đầu, mất ngủ, căng thẳng kéo dài.',
    image: 'https://images.pexels.com/photos/23349902/pexels-photo-23349902.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    duration: '60–110 phút',
    icon: Sparkles,
  },
  {
    id: 'body-massage',
    name: 'Body Thư Giãn',
    vietnamese: 'Massage Toàn Thân',
    description: 'Massage body thư giãn với kỹ thuật chuyên sâu, giúp giải tỏa căng cơ, lưu thông khí huyết, mang lại cảm giác nhẹ nhõm và phục hồi năng lượng.',
    image: 'https://images.pexels.com/photos/6187418/pexels-photo-6187418.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    duration: '60–90 phút',
    icon: HandHeart,
  },
  {
    id: 'body-đá-nóng',
    name: 'Body Đá Nóng',
    vietnamese: 'Nhiệt Liệu Pháp',
    description: 'Massage body kết hợp đá nóng di chuyển dọc kinh lạc, dùng nhiệt lượng giúp giãn cơ sâu, giải độc, giảm đau nhức mãn tính hiệu quả.',
    image: 'https://images.pexels.com/photos/6629609/pexels-photo-6629609.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    duration: '60–90 phút',
    icon: Droplets,
  },
  {
    id: 'chữa-bệnh-cổ-truyền',
    name: 'Chữa Bệnh Cổ Truyền',
    vietnamese: 'Cứu Ấm – Giác Hơi – Bài Phong',
    description: 'Liệu pháp y học cổ truyền: cứu ấm, xông ngải, giác hơi, trượt giác, bài phong tán hàn — giải cảm, giảm đau nhức, cân bằng âm dương.',
    image: 'https://images.pexels.com/photos/27925505/pexels-photo-27925505.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    duration: '40–70 phút',
    icon: Leaf,
  },
  {
    id: 'cgm-mặt',
    name: 'CGM Nâng Cơ Mặt',
    vietnamese: 'Ngọc Thạch Thiên Nhiên',
    description: 'Nâng cơ mặt bằng ngọc thạch (CGM) giúp định hình khuôn mặt, giảm chùng nhão, căng bóng da, trẻ hóa vùng mặt và cổ tự nhiên.',
    image: 'https://images.pexels.com/photos/9774581/pexels-photo-9774581.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    duration: '75 phút',
    icon: Gem,
  },
  {
    id: 'chăm-sóc-mẹ-bầu',
    name: 'Chăm Sóc Mẹ Bầu',
    vietnamese: 'Massage An Toàn Cho Thai Phụ',
    description: 'Gói chăm sóc thư giãn dành riêng cho mẹ bầu: massage nhẹ nhàng, giảm phù, đau lưng, mệt mỏi — an toàn cho cả mẹ và bé.',
    image: 'https://images.pexels.com/photos/7011390/pexels-photo-7011390.jpeg?auto=compress&cs=tinysrgb&w=900&h=1100&fit=crop',
    duration: '60–90 phút',
    icon: Flower2,
  },
];

export const features: Feature[] = [
  {
    icon: Leaf,
    title: 'Thảo Dược Thiên Nhiên',
    description: 'Sử dụng thảo dược thiên nhiên, lành tính, an toàn cho sức khỏe và làn da của khách hàng.',
  },
  {
    icon: Gem,
    title: 'Kỹ Thuật Chuyên Sâu',
    description: 'Đội ngũ kỹ thuật viên giàu kinh nghiệm, bấm huyệt chuẩn xác, mang lại hiệu quả thiết thực.',
  },
  {
    icon: Heart,
    title: 'Không Gian Riêng Tư',
    description: 'Không gian sạch sẽ, yên tĩnh, riêng tư — nơi bạn có thể hoàn toàn thư giãn và vứt bỏ muộn phiền.',
  },
  {
    icon: Sparkles,
    title: 'Tận Tâm Phục Vụ',
    description: 'Chăm sóc từ tâm, tư vấn tận tình, luôn đặt trải nghiệm và sức khỏe của khách hàng lên hàng đầu.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Chị Nguyễn Thị Hoa',
    location: 'Quận 7, TP.HCM',
    text: 'Mình thường xuyên đến gội đầu dưỡng sinh ở đây. Sau mỗi lần là cảm giác nhẹ nhõm đầu, ngủ ngon hơn hẳn. Kỹ thuật viên massage rất lực và chu đáo.',
    rating: 5,
    initials: 'NH',
  },
  {
    name: 'Anh Trần Văn Minh',
    location: 'Quận 8, TP.HCM',
    text: 'Mình hay bị đau vai gáy do ngồi máy tính nhiều. Sau mấy liệu trình cứu ấm và giác hơi ở Kim Thủy thì giảm hẳn. Không gian sạch sẽ, nhân viên nhiệt tình.',
    rating: 5,
    initials: 'MT',
  },
  {
    name: 'Chị Lê Thị Mai',
    location: 'Quận 7, TP.HCM',
    text: 'Mình đi massage bầu ở đây từ tháng thứ 6. Nhẹ nhàng, an toàn, đi về người nhẹ hẳn, hết đau lưng. Rất yên tâm khi gửi gắm sức khỏe tại Kim Thủy Spa.',
    rating: 5,
    initials: 'LM',
  },
];

export const offers: Offer[] = [
  {
    badge: 'Khách Mới',
    title: 'Gói Chào Mừng',
    description: 'Gói trải nghiệm dành cho khách lần đầu — gội đầu dưỡng sinh kết hợp chăm sóc da mặt cơ bản.',
    price: '299k',
    originalPrice: '399k',
    features: [
      'Gội đầu dưỡng sinh 60 phút',
      'Mặt nạ đông giá dưỡng da',
      'Tư vấn chăm sóc da miễn phí',
    ],
    featured: false,
  },
  {
    badge: 'Phổ Biến Nhất',
    title: 'Gói Dưỡng Sinh Tháng',
    description: 'Gói thành viên hàng tháng — tiết kiệm hơn với 2 liệu trình dưỡng sinh ưu đãi, đặt lịch ưu tiên.',
    price: '899k',
    originalPrice: '1.198k',
    features: [
      '2 gói chăm sóc tùy chọn mỗi tháng',
      'Giảm 15% cho dịch vụ phát sinh',
      'Đặt lịch ưu tiên, không cần chờ',
      'Ngâm chân thảo mộc miễn phí',
    ],
    featured: true,
  },
  {
    badge: 'Giới Hạn',
    title: 'Gói Cặp Đôi',
    description: 'Chia sẻ giây phút thư giãn cùng người thân — hai phòng kề nhau, trải nghiệm trọn vẹn.',
    price: '799k',
    originalPrice: '998k',
    features: [
      '2 body thư giãn 60 phút',
      'Phòng đôi riêng tư',
      'Trà thảo mộc mời dùng',
    ],
    featured: false,
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.pexels.com/photos/35884499/pexels-photo-35884499.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
    alt: 'Không gian spa yên tĩnh với bàn massage và nến thơm',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/1926811/pexels-photo-1926811.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Góc thư giãn với nến, khăn mềm và hoa tươi',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/6560252/pexels-photo-6560252.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    alt: 'Dụng cụ therapi bằng tinh dầu trên bàn gỗ',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/26859044/pexels-photo-26859044.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    alt: 'Bồn ngâm thư giãn với cánh hoa và nến',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/5480150/pexels-photo-5480150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    alt: 'Nghiền thảo dược thiên nhiên bằng cối đá',
    span: 'wide',
  },
  {
    src: 'https://images.pexels.com/photos/6628531/pexels-photo-6628531.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop',
    alt: 'Tinh dầu và nến thơm thư giãn',
    span: 'tall',
  },
  {
    src: 'https://images.pexels.com/photos/9483564/pexels-photo-9483564.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    alt: 'Massage chân thư giãn tại spa',
    span: 'normal',
  },
  {
    src: 'https://images.pexels.com/photos/6560348/pexels-photo-6560348.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
    alt: 'Góc thảo mộc và nến thơm',
    span: 'normal',
  },
];

export const heroImage = 'https://images.pexels.com/photos/3764552/pexels-photo-3764552.jpeg?auto=compress&cs=tinysrgb&w=1600&h=2000&fit=crop';
export const heroImageSecondary = 'https://images.pexels.com/photos/23349910/pexels-photo-23349910.jpeg?auto=compress&cs=tinysrgb&w=800&h=1100&fit=crop';

export const brandImage = 'https://images.pexels.com/photos/5480036/pexels-photo-5480036.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop';
export const brandImageSecondary = 'https://images.pexels.com/photos/6560313/pexels-photo-6560313.jpeg?auto=compress&cs=tinysrgb&w=600&h=700&fit=crop';

export const resultsImages: string[] = [
  'https://images.pexels.com/photos/3762758/pexels-photo-3762758.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop',
  'https://images.pexels.com/photos/5927932/pexels-photo-5927932.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop',
  'https://images.pexels.com/photos/9335961/pexels-photo-9335961.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop',
  'https://images.pexels.com/photos/9335967/pexels-photo-9335967.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop',
];

export const bookingImage = 'https://images.pexels.com/photos/37240358/pexels-photo-37240358.jpeg?auto=compress&cs=tinysrgb&w=1000&h=1200&fit=crop';

export const navLinks = [
  { label: 'Trang Chủ', href: '#hero' },
  { label: 'Về Chúng Tôi', href: '#about' },
  { label: 'Dịch Vụ', href: '#treatments' },
  { label: 'Bảng Giá', href: '#pricing' },
  { label: 'Ưu Đãi', href: '#offers' },
  { label: 'Thư Viện', href: '#gallery' },
  { label: 'Liên Hệ', href: '#contact' },
];

export const spaInfo = {
  name: 'Kim Thủy',
  nameFull: 'Kim Thủy Spa',
  tagline: 'Spa Thuần Khỏe — Thư Giãn Hôm Nay, Khỏe Đẹp Mỗi Ngày',
  phone: '093.117.9907',
  phoneRaw: '0931179907',
  email: '[Thêm địa chỉ email]',
  address: '1041/62/23C Trần Xuân Soạn, P. Tân Hưng, Quận 7',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=1041/62/23C+Trần+Xân+Soạn+Tân+Hưng+Quận+7+Ho+Chi+Minh',
  hours: [
    { day: 'Thứ 2 – Chủ Nhật', time: '11:00 – 20:00' },
  ],
  social: {
    facebook: '#',
    instagram: '#',
    zalo: '0931179907',
  },
};
