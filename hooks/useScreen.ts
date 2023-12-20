import { useMediaQuery } from "usehooks-ts";

export function useScreen() {
  const sm = useMediaQuery("(min-width: 640px)");
  const md = useMediaQuery("(min-width: 768px)");
  const lg = useMediaQuery("(min-width: 1024px)");
  const xl = useMediaQuery("(min-width: 1280px)");
  const xxl = useMediaQuery("(min-width: 1400px)");

  return {
    sm,
    md,
    lg,
    xl,
    xxl,
  };
}
