export function FlowingHeads({ className }: { className?: string }) {
  return (
    <div className={`${className} py-5 overflow-hidden`}>
      <div className="bg-flowing-heads" style={{ height: 41 }}></div>
    </div>
  );
}
