if (!window.HtmlTemplates) window.HtmlTemplates = {};
if (!window.HtmlTemplatesGroups) window.HtmlTemplatesGroups = {};
/* -------------------- */
HtmlTemplatesGroups['rows-manager-templates'] = {};
HtmlTemplatesGroups['rows-manager-templates']['row-decorator-template'] = "\u003cdiv class=\u0027mobile-drop-area-marking row-area-marking\u0027\u003e\r\n            \u003cdiv class=\"marking-main-line marking-line stretch-horizontally\"\u003e\u003c/div\u003e\r\n            \u003cdiv class=\"marking-left-line marking-line positioned-beyond-left stretch-vertically\"\u003e\u003c/div\u003e\r\n            \u003cdiv class=\"marking-right-line marking-line positioned-beyond-right stretch-vertically\"\u003e\u003c/div\u003e\r\n        \u003c/div\u003e";
HtmlTemplatesGroups['rows-manager-templates']['column-decorator-template'] = "\u003cdiv class=\u0027mobile-drop-area-marking column-area-marking\u0027\u003e\r\n            \u003cdiv class=\"marking-main-line marking-line stretch-vertically\"\u003e\u003c/div\u003e\r\n            \u003cdiv class=\"marking-left-line marking-line positioned-above stretch-horizontally\"\u003e\u003c/div\u003e\r\n            \u003cdiv class=\"marking-right-line marking-line positioned-below stretch-horizontally\"\u003e\u003c/div\u003e\r\n        \u003c/div\u003e";
/* -------------------- */
HtmlTemplatesGroups['mobile-version-view-manager-templates'] = {};
HtmlTemplatesGroups['mobile-version-view-manager-templates']['cell-resizing-handle-template'] = "\u003cdiv class=\"cell-resizing-handle disable-context-menu\"\u003e\r\n            \u003cdiv class=\"marking-main-line stretch-vertically\"\u003e\u003cdiv class=\u0027dashed-overlay stretched-to-fill\u0027\u003e\u003c/div\u003e\u003c/div\u003e\r\n            \u003cdiv class=\"handle-inner-decorator\"\u003e\u003c/div\u003e\r\n        \u003c/div\u003e";
/* -------------------- */
HtmlTemplatesGroups['drop-down-navigation-desktop-panel-templates'] = {};
HtmlTemplatesGroups['drop-down-navigation-desktop-panel-templates']['drop-down-navigation-desktop-panel-template'] = "\u003cdiv class=\"drop-down-navigation-desktop-panel drop-down-navigation-desktop-panel-${level}\"\u003e\r\n            \u003cdiv class=\"content-container right\"\u003e\r\n                \u003cdiv class=\"border-box stretched-to-fill\"\u003e\u003c/div\u003e\r\n                \u003cdiv class=\"pages-list\"\u003e\u003c/div\u003e\r\n            \u003c/div\u003e\r\n        \u003c/div\u003e";
HtmlTemplatesGroups['drop-down-navigation-desktop-panel-templates']['page-item-template'] = "\u003cdiv class=\"page-item simple\"\u003e\r\n            \u003cdiv class=\"page-content item-block\"\u003e\r\n                \u003cdiv class=\"page-title text-overflow\"\u003e${title}\u003c/div\u003e\r\n                \u003cdiv class=\"sub-hierarchy-icon-container\"\u003e\u003cdiv class=\"height-normalizer\"\u003e\u003c/div\u003e\u003cdiv class=\"sub-hierarchy-icon vertically-centered\"\u003e\u003c/div\u003e\u003c/div\u003e\r\n            \u003c/div\u003e\r\n        \u003c/div\u003e";
HtmlTemplatesGroups['drop-down-navigation-desktop-panel-templates']['page-item-instance-template'] = "\u003cdiv class=\"page-item instance\"\u003e\r\n            \u003cdiv class=\"page-content item-block\"\u003e\r\n                \u003cdiv class=\"instance-content\"\u003e\u003c/div\u003e\r\n                \u003cdiv class=\"sub-hierarchy-icon-container\"\u003e\u003cdiv class=\"height-normalizer\"\u003e\u003c/div\u003e\u003cdiv class=\"sub-hierarchy-icon vertically-centered\"\u003e\u003c/div\u003e\u003c/div\u003e\r\n            \u003c/div\u003e\r\n        \u003c/div\u003e";
/* -------------------- */
HtmlTemplatesGroups['iframe-content-templates'] = {};
HtmlTemplatesGroups['iframe-content-templates']['iframe-content-template'] = "\u003cdiv class=\"iframe-content-wrapper iframe-content-block scrolling-${scrolling}\"\u003e\r\n            \u003ciframe class=\"iframe-content-element iframe-content-block\" allowtransparency=\"true\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\" width=\"100%\" height=\"100%\" src=\"${url}\" scrolling=\"${scrolling}\"\u003e\u003c/iframe\u003e\r\n        \u003c/div\u003e";
/* -------------------- */
HtmlTemplatesGroups['page-element-templates'] = {};
HtmlTemplatesGroups['page-element-templates']['page-element-template'] = "\u003cdiv class=\"page-element\"\u003e\r\n        \u003c/div\u003e";
HtmlTemplatesGroups['page-element-templates']['resize-grip-template'] = "\u003cdiv class=\"page-resize-grip resize-grip\"\u003e\r\n            \u003cdiv class=\"resize-grip-line\"\u003e\u003c/div\u003e\r\n        \u003c/div\u003e";
/* -------------------- */
HtmlTemplates['text-input-field-element-template'] = "\u003cdiv class=\"text-input-field-element absolute-fill\"\u003e\r\n            \u003cinput class=\"text-input absolute-fill transparent-text-box\" type=\"text\" /\u003e\r\n        \u003c/div\u003e";
/* -------------------- */
HtmlTemplates['text-area-element-template'] = "\u003cdiv class=\"text-area-element absolute-fill\"\u003e\r\n            \u003ctextarea class=\"text-area absolute-fill transparent-text-box\"\u003e\u003c/textarea\u003e\r\n        \u003c/div\u003e";
/* -------------------- */
HtmlTemplates['youtube-element-template'] = "\u003cdiv class=\"youtube-player-holder absolute-fill\"\u003e\r\n        \u003ciframe class=\"youtube-iframe absolute-fill\" type=\"text/html\" width=\"100%\" height=\"100%\" frameborder=\"0\"\u003e\u003c/iframe\u003e\r\n    \u003c/div\u003e";
/* -------------------- */
HtmlTemplates['app-element-content-template'] = "\u003ciframe class=\"app-iframe\" frameborder=\"0\" marginheight=\"0\" marginwidth=\"0\" width=\"100%\" height=\"100%\"\u003e\u003c/iframe\u003e";
/* -------------------- */
HtmlTemplates['paypal-button-template'] = "\u003cdiv class=\"paypal-button-holder absolute-fill\"\u003e\r\n    \u003c/div\u003e";
/* -------------------- */
HtmlTemplatesGroups['slide-navigation-panel-templates'] = {};
HtmlTemplatesGroups['slide-navigation-panel-templates']['slide-navigation-panel-template'] = "\u003cdiv class=\"slide-navigation-panel\"\u003e\r\n            \u003cdiv class=\"header\"\u003e\u003cdiv class=\"close-icon-content\"\u003e\u003c/div\u003e\u003c/div\u003e\r\n            \u003cdiv class=\"pages-container\"\u003e\r\n                \u003cdiv class=\"pages-list\"\u003e\u003c/div\u003e\r\n            \u003c/div\u003e\r\n            \u003cdiv class=\"footer\"\u003e\u003c/div\u003e\r\n        \u003c/div\u003e";
HtmlTemplatesGroups['slide-navigation-panel-templates']['page-item-template'] = "\u003cdiv class=\"page-item\"\u003e\r\n            \u003cdiv class=\"page-content\"\u003e\r\n                \u003cdiv class=\"icon-container\"\u003e\u003cdiv class=\"height-normalizer\"\u003e\u003c/div\u003e\u003cdiv class=\"open-icon hierarchy-icon\"\u003e\u003c/div\u003e\u003cdiv class=\"close-icon hierarchy-icon\"\u003e\u003c/div\u003e\u003c/div\u003e\r\n                \u003cdiv class=\"title-container\"\u003e\u003cdiv class=\"page-title text-overflow\"\u003e${title}\u003c/div\u003e\u003c/div\u003e\r\n            \u003c/div\u003e\r\n        \u003c/div\u003e";
