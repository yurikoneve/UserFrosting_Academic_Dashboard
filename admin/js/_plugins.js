
$(function(){$('table.modules.expandable tr.line').each(function(){$('td.module-name',this).toggleWithLegend($(this).next('.module-more'),{img_on_src:dotclear.img_plus_src,img_on_alt:dotclear.img_plus_alt,img_off_src:dotclear.img_minus_src,img_off_alt:dotclear.img_minus_alt,legend_click:true});});$('.checkboxes-helpers').each(function(){dotclear.checkboxesHelpers(this);});$('.modules-form-actions').each(function(){var rxActionType=/^[^\[]+/;var rxActionValue=/([^\[]+)\]$/;var checkboxes=$(this).find('input[type=checkbox]');$("input[type=submit]",this).click(function(){var keyword=$(this).attr('name');var maction=keyword.match(rxActionType);var action=maction[0];var mvalues=keyword.match(rxActionValue);if(!mvalues){var checked=false;if(checkboxes.length>0){$(checkboxes).each(function(){if(this.checked){checked=true;}});if(!checked){return false;}}
if(action=='delete'){return window.confirm(dotclear.msg.confirm_delete_plugins);}}else{var module=mvalues[1];if(action=='delete'){return window.confirm(dotclear.msg.confirm_delete_plugin.replace('%s',module));}}
return true;});});});