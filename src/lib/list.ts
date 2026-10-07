// Shared loading / empty / error states for lists fed by Supabase.
export async function renderList(box: HTMLElement, run: (() => any) | null, tpl: (r: any) => string, empty: string): Promise<any> {
  const go = async (): Promise<any> => {
    box.setAttribute('aria-busy', 'true');
    box.innerHTML = Array(3).fill('<div class="skeleton h-44"></div>').join('');
    const res = run ? await run() : { error: true };
    box.removeAttribute('aria-busy');
    if (res.error || !res.data) {
      box.innerHTML = '<div role="alert" class="col-span-full rounded-2xl border border-red-500/40 bg-panel p-6">We could not load this content. <button class="retry text-sky underline">Try again</button></div>';
      box.querySelector<HTMLElement>('.retry')!.onclick = go; return res;
    }
    box.innerHTML = res.data.length ? res.data.map(tpl).join('') : `<p class="col-span-full text-mist">${empty}</p>`;
    return res;
  };
  return go();
}
