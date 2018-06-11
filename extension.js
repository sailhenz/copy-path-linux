
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const copy = require('copy-paste').copy;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    var disposable = vscode.commands.registerCommand('copyabsolutepath', function (uri) {
        if (typeof uri === 'undefined') {
            if (vscode.window.activeTextEditor) {
                uri = vscode.window.activeTextEditor.document.uri;
            }
        }
        if (!uri) {
            vscode.window.showErrorMessage('Cannot copy absolute path, as there appears no file is opened (or it is very large');
            return;
        }

        var path = uri.path;
        
        path = path.replace(':', '');
        copy(path);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {
}
exports.deactivate = deactivate;