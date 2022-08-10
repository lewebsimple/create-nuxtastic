import { generateClasses } from "@formkit/themes";
import { DefaultConfigOptions } from "@formkit/vue";

const config: DefaultConfigOptions = {
  config: {
    classes: generateClasses({
      global: {
        outer: "formkit-disabled:opacity-50",
        label: "block mb-1.5 font-bold",
        help: "text-sm text-gray-500",
        messages: "list-none",
        message: "text-sm text-red-500",
      },
      submit: {
        input: "btn-default",
      },
    }),
  },
};

export default config;
