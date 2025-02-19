export const useScrollHorizontal = (
  left: boolean = true,
  scrollContainer: HTMLDivElement | null,
) => {
  if (!scrollContainer) return;
  if (left) {
    if (scrollContainer.scrollLeft === 0) {
      scrollContainer.scrollLeft += scrollContainer.scrollWidth;
      return;
    }
    scrollContainer.scrollLeft -= scrollContainer.clientWidth;
    return;
  }
  if (
    Math.ceil(scrollContainer.scrollLeft + scrollContainer.clientWidth + 8) >=
    scrollContainer.scrollWidth
  ) {
    scrollContainer.scrollLeft -= scrollContainer.scrollWidth;
    return;
  }
  scrollContainer.scrollLeft += scrollContainer.clientWidth;
  return;
};

export const useScrollVertical = (
  up: boolean = true,
  scrollContainer: HTMLDivElement | null,
) => {
  if (!scrollContainer) return;

  if (up) {
    if (scrollContainer.scrollTop === 0) {
      scrollContainer.scrollTop += scrollContainer.scrollHeight;
      return;
    }
    scrollContainer.scrollTop -= scrollContainer.clientHeight;
    return;
  }
  if (
    scrollContainer.scrollTop + scrollContainer.clientHeight ===
    scrollContainer.scrollHeight
  ) {
    scrollContainer.scrollTop = 0;
    return;
  }
  scrollContainer.scrollTop += scrollContainer.clientHeight;
  return;
};
