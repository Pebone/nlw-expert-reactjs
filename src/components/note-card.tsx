export function NoteCard() {
  return (
    <button className="rounded-md text-left bg-slate-800 outline-none p-5 space-y-3 overflow-hidden relative flex flex-col hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
      <span className="text-sm font-medium text-slate-300">há 8 dias</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
        exercitationem ab fugit, animi est iure consectetur illum dolorem
        cumque. Dicta dolor temporibus non veniam odit molestiae tenetur fugiat
        accusamus aperiam.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none" />
    </button>
  );
}
