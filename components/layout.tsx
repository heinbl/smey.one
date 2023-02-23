import { Raleway } from '@next/font/google';
type LayoutProps = {
  children: React.ReactNode;
}

const raleway = Raleway({
  subsets: ['latin'],
});

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className={ raleway.className }>{ children }</main>
    </>
  );
}
