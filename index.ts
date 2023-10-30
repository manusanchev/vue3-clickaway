import { App, Directive } from "vue";

const clickAwayHandlers = new WeakMap<HTMLElement, (event: MouseEvent) => void>();

const clickAway: Directive<HTMLElement, (event: Event) => void> = {
  mounted(el, binding) {
    const clickHandler = (event: MouseEvent) => {
      if (!el.contains(event.target as Node)) {
        binding.value(event);
      }
    };

    clickAwayHandlers.set(el, clickHandler);

    document.addEventListener("mousedown", clickHandler);
    document.addEventListener("touchstart", clickHandler);
  },
  beforeUnmount(el) {
    const clickHandler = clickAwayHandlers.get(el);
    if (clickHandler) {
      document.removeEventListener("mousedown", clickHandler);
      document.removeEventListener("touchstart", clickHandler);
      clickAwayHandlers.delete(el);
    }
  },
};

export default {
  install: (app: App) => {
    app.directive("clickaway", clickAway);
  },
};
