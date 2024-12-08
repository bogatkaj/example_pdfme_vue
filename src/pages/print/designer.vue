<template>
  <q-page>
    <div ref="ui"></div>
  </q-page>
</template>

<script>
import { Template, BLANK_PDF } from '@pdfme/common';
import { Designer } from '@pdfme/ui';
import {useQuasar} from "quasar";

export default {
  setup() {
    const quasar = useQuasar();
  },
  mounted() {
    const domContainer = this.$refs.ui
    const template = {
      basePdf: BLANK_PDF,
      schemas: [
        [
          {
            name: 'a',
            type: 'text',
            position: { x: 0, y: 0 },
            width: 10,
            height: 10,
          },
          {
            name: 'b',
            type: 'text',
            position: { x: 10, y: 10 },
            width: 10,
            height: 10,
          },
          {
            name: 'c',
            type: 'text',
            position: { x: 20, y: 20 },
            width: 10,
            height: 10,
          },
        ],
      ],
    };

    const designer = new Designer({ domContainer, template });
  }
}
</script>
