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

		config.extraPlugins = 'autoembed,'+'embedsemantic,'+'image2,'+'uploadimage,'+'uploadfile,'+'widget,'+'basewidget,'+'layoutmanager,'+'bt_table,'+'btquicktable';

		config.removePlugins = 'image';

		config.uploadUrl = '/manager/uploadBlogImage.php';
		config.filebrowserUploadUrl = "/manager/uploadBlogImage.php";

		config.removeButtons = 'Cut,Copy,Paste,PasteText,PasteFromWord,Redo,Undo,Source,Save,NewPage,Preview,Print,Templates,Find,Replace,SelectAll,Form,Checkbox,Radio,TextField,Textarea,Select,Button,HiddenField,ImageButton,CopyFormatting,Language,BidiRtl,BidiLtr,Flash,Smiley,PageBreak,Iframe,Font,TextColor,BGColor,About';
		config.removeDialogTabs = 'image:Image Info';
		config.layoutmanager_loadbootstrap = true/false //(false by default - embedded bootstrap.css is not loaded)
		config.layoutmanager_allowedContent //(all tags are allowed by default)
		config.layoutmanager_buttonboxWidth = 58 //(the width of each layout-preview button in the dialog).
		

		/* stylesheet per site needs to be appended to content.css in ckeditor root 
		!IMPORTANT do not override the existing styles above line 209 */
		config.stylesSet = [
			// Block-level styles.
			{ name: 'Blue Title', element: 'h2', attributes: { 'class': 'colored-text' } },
			{ name: 'CTA Large', element: 'h4', attributes: { 'class': 'cta-large' } },
			{ name: 'Paragraph Text', element: 'p', attributes: { 'class': '' } },

			// Inline styles.
			{ name: 'CSS Style', element: 'span', attributes: { 'class': 'my_style' } },
			{ name: 'Marker: Yellow', element: 'span', styles: { 'background-color': 'Yellow' } }
		]

		CKEDITOR.on('dialogDefinition', function (ev) {
				
              var dialogName = ev.data.name;
              var dialog = ev.data.definition.dialog;
			 
              if (dialogName == 'image2') {
                  dialog.on('show', function (ev) {
					 
					  var hasElement = this.getSelectedElement();
					  if(hasElement == null)
					  {
						this.selectPage('Upload');
					  }
                      
                  });
              }
          });


		  
			
};





