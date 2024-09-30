import { MetaFunction } from '@remix-run/node'; // Chú ý: chỉ sử dụng '@remix-run/node' cho server-side
import HomeComponent from '~/components/HomeComponent';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

// Component hiển thị dữ liệu
export default function Index() {
  return (
    <div>
      <HomeComponent />
    </div>
  );
}
