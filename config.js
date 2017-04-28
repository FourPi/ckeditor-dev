/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.plugins =
		'about,' +
		'a11yhelp,' +
		'basicstyles,' +
		'bidi,' +
		'blockquote,' +
		'clipboard,' +
		'colorbutton,' +
		'colordialog,' +
		'copyformatting,' +
		'contextmenu,' +
		'dialogadvtab,' +
		'div,' +
		'elementspath,' +
		'enterkey,' +
		'entities,' +
		'filebrowser,' +
		'find,' +
		'flash,' +
		'floatingspace,' +
		'font,' +
		'format,' +
		'forms,' +
		'horizontalrule,' +
		'htmlwriter,' +
		'image,' +
		'iframe,' +
		'indentlist,' +
		'indentblock,' +
		'justify,' +
		'language,' +
		'link,' +
		'list,' +
		'liststyle,' +
		'magicline,' +
		'maximize,' +
		'newpage,' +
		'pagebreak,' +
		'pastefromword,' +
		'pastetext,' +
		'preview,' +
		'print,' +
		'removeformat,' +
		'resize,' +
		'save,' +
		'selectall,' +
		'showblocks,' +
		'showborders,' +
		'smiley,' +
		'sourcearea,' +
		'specialchar,' +
		'stylescombo,' +
		'tab,' +
		'table,' +
		'tabletools,' +
		'templates,' +
		'toolbar,' +
		'undo,' +
		'wysiwygarea';

		config.extraPlugins = 'autoembed,'+'embedsemantic,'+'image2,'+'uploadimage,'+'uploadfile,'+'widget,'+'basewidget,'+'layoutmanager,'+'devtools';

		config.removePlugins = 'image';

		config.uploadUrl = '/alpha/ckeditor_GIT/manager/uploadBlogImage.php';
		config.filebrowserUploadUrl = "/alpha/ckeditor_GIT/manager/uploadBlogImage.php";

		config.removeButtons = 'Cut,Copy,Paste,PasteText,PasteFromWord,Redo,Undo,Source,Save,NewPage,Preview,Print,Templates,Find,Replace,SelectAll,Form,Checkbox,Radio,TextField,Textarea,Select,Button,HiddenField,ImageButton,CopyFormatting,Language,BidiRtl,BidiLtr,Flash,Smiley,PageBreak,Iframe,Font,TextColor,BGColor,About';
		config.removeDialogTabs = 'image:Image Info';
		config.layoutmanager_loadbootstrap = true/false //(false by default - embedded bootstrap.css is not loaded)
		config.layoutmanager_allowedContent //(all tags are allowed by default)
		config.layoutmanager_buttonboxWidth = 58 //(the width of each layout-preview button in the dialog).


		CKEDITOR.on('dialogDefinition', function (ev) {
				console.log(ev);
              var dialogName = ev.data.name;
              var dialog = ev.data.definition.dialog;

              if (dialogName == 'image2') {
                  dialog.on('show', function (ev,e) {
					  console.log(ev);
					  console.log(e);
                      this.selectPage('Upload');
                  });
              }
          });

		  CKEDITOR.on( 'click', function( evt ) {
				console.log(evt.data.getTarget()); // will return a target element (CKEDITOR.dom.element)
				console.log(evt.data.$.target); // will contain a native element
			} );
};


