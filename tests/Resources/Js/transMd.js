_transMd('Lorem ipsum dolor sit amet', {}, 'messages');
_transMd("Lorem ipsum **dolor sit** amet");
_transMd(`How
about
a
multi-line!
`);
_transMd('With %adjective% placeholders', { adjective: 'fancy' }, 'messages');
