// crear un decorador que agregue estilos scss a un componente lit
import { unsafeCSS } from "lit";
import { utilityStyles } from "@/managers/utility-styles.manager";

export function scssAdd() {
  return function (target: any) {
    const fileName = target.is;

    import(`@/elements/layout/${fileName}/${fileName}.scss?inline`).then(
      (styles) => {
        console.log("styles", styles);
        target.styles = [
          target.styles,
          unsafeCSS(styles.default),
          utilityStyles.use(["container", "title"]),
        ];
      },
    );

    return target;
  };
}
