document.writeln('<script type="text/javascript">');
document.writeln('function validate_baidu(theform) {');
document.writeln('	if(theform.site.value == 1) {');
document.writeln('		theform.wd.value = \'site:' + baidu_host.replace(":80$","") + ' \' + theform.wd.value;');
document.writeln('	}');
document.writeln('}');
document.writeln('function submitFormWithChannel(channelname) {');
document.writeln('	document.gform.channel.value=channelname;');
document.writeln('	document.gform.submit();');
document.writeln('	return;');
document.writeln('}');
document.writeln('</script>');
document.writeln('<form name="gform" id="gform" method="get" action="http://www.baidu.com/s?" target="_blank" onSubmit="validate_baidu(this);">');
document.writeln('<input type="hidden" name="client" value="aff-jsprun" />');
document.writeln('<input type=hidden name=ie value="' + baidu_charset + '">');
document.writeln('<input type=hidden name=sr>');
document.writeln('<input type=hidden name=z value="">');
document.writeln('<input type=hidden name=cl value=3>');
document.writeln('<input type=hidden name=f value=8>');
document.writeln('<input type=hidden name=ct value="0">');
document.write('<a href="http://www.baidu.com" target="_blank"><div style="cursor:pointer;float: left;width:70px;height:23px;)"><img src="images/common/baidu_image.gif" border="0" alt="Baidu" /></div></a>');
document.writeln('&nbsp;&nbsp;<input type="text" name=wd id="wd" size="10" maxlength="255"></input>');
document.writeln('<select name="site">');
document.writeln('<option value="0">'+lang['webpage_search']+'</option>');
document.writeln('<option value="1">'+lang['site_search']+'</option>');
document.writeln('</select>');
document.writeln('&nbsp;<button type="submit" name="sa" value="true">'+lang['search']+'</button>');
document.writeln('</form>');