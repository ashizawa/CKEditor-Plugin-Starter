CKEDITOR.plugins.add('dummy',
{

    beforeInit: function(editor)
    {
    },

    init: function(editor)
    {
        var pluginName = 'dummy';
        CKEDITOR.dialog.add(pluginName, this.path + 'dialogs/dummy.js');
        editor.addCommand(pluginName, new CKEDITOR.dialogCommand(pluginName));
        editor.ui.addButton('Dummy', {
            label: editor.lang.title,
            command: pluginName,
            icon: this.path + 'dummy.png'
        });
    }
});
