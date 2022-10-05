import * as React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import * as pageProps from 'docsx/data/date-pickers/custom-components/custom-components.md?@mui/markdown';

export default function Page() {
  return <MarkdownDocs {...pageProps} />;
}
