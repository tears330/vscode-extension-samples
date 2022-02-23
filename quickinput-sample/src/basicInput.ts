/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { ThemeColor, ThemeIcon, window } from 'vscode';

/**
 * Shows a pick list using window.showQuickPick().
 */
export async function showQuickPick() {
	let i = 0;
	const quickPick = window.createQuickPick();
	quickPick.title = '123123';
	quickPick.items = new Array(10).fill('').map((_, i) => ({
		label: `Item ${i}`,
		buttons: [
			{
				iconPath: new ThemeIcon('remote-explorer-documentation'),
				tooltip: '查看文档',
			},
		],
	}));
	quickPick.show();
}

/**
 * Shows an input box using window.showInputBox().
 */
export async function showInputBox() {
	const result = await window.showInputBox({
		value: 'abcdef',
		valueSelection: [2, 4],
		placeHolder: 'For example: fedcba. But not: 123',
		validateInput: (text) => {
			window.showInformationMessage(`Validating: ${text}`);
			return text === '123' ? 'Not 123!' : null;
		},
	});
	window.showInformationMessage(`Got: ${result}`);
}
