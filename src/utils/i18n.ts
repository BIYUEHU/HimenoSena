import locale from "../i18n/locale.ts";

export class I18n {
  private static readonly locales: Map<string, string> = new Map(
    Object.entries(locale),
  );

  public static t(locale: TemplateStringsArray) {
    return I18n.locales.get(locale[0]) ?? locale[0];
  }

  public static f(locale: TemplateStringsArray) {
    return (...args: (string | number)[]) =>
      args.reduce(
        (acc: string, cur, index) =>
          acc.replaceAll(`{${index}}`, cur.toString()),
        I18n.t(locale),
      );
  }
}
