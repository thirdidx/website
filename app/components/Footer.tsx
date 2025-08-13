import TimeDisplay from './TimeDisplay';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative flex items-end justify-between p-4 text-xs md:h-24">
      <div className="flex items-center">© {currentYear} thirdindex LLC</div>
      <div className="flex items-center gap-2 text-xs">
        <TimeDisplay />
      </div>
    </footer>
  );
}
