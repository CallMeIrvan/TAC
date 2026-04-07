import Swal from 'sweetalert2';

export const SaaSAlert = Swal.mixin({
  customClass: {
    popup: 'rounded-2xl border border-slate-100 shadow-[0_20px_50px_rgba(15,23,42,0.1)] bg-white p-8',
    title: 'text-2xl font-bold text-slate-900 mb-2',
    htmlContainer: 'text-slate-500 font-medium text-sm m-0',
    confirmButton: 'bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl px-8 py-3.5 mt-6 transition-colors shadow-lg shadow-slate-900/20 w-full',
    cancelButton: 'bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl px-8 py-3.5 mt-6 transition-colors w-full',
    actions: 'w-full gap-3',
  },
  buttonsStyling: false,
  showClass: {
    popup: 'animate-in zoom-in-95 duration-200 fade-in',
  },
  hideClass: {
    popup: 'animate-out zoom-out-95 duration-200 fade-out',
  }
});
