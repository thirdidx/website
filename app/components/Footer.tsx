import TimeDisplay from './TimeDisplay';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-between gap-2 p-4 text-xs">
      <div className="flex items-center">© {currentYear}</div>
      <div className="flex items-center gap-2 text-xs">
        <TimeDisplay />
      </div>
    </footer>
  );
}
