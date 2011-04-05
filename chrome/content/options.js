
function customizeWebStartup() {
    var parent_window = null;
    if (opener && opener.location.href.indexOf("extensions.xul") != -1) {
        if (opener.opener && (opener.opener.location.href.indexOf("browser.xul") != -1)) {
            parent_window = opener.opener;
        } else {
            var window_service = Components.classes["@mozilla.org/appshell/window-mediator;1"].getService(Components.interfaces.nsIWindowMediator);
            parent_window = window_service.getMostRecentWindow("navigator:browser");
        }
    } else {
        parent_window = opener;
    }
    parent_window.setTimeout(function (parent) {
        parent.WebStartup.customize(1);
    }, 100, parent_window);
    return true;
}