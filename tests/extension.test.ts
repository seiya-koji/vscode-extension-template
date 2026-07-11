import { describe, it, expect, beforeEach, vi } from 'vitest';
import * as vscode from 'vscode';
import { activate, deactivate } from '../src/extension';

describe('activate', () => {
  let context: vscode.ExtensionContext;

  beforeEach(() => {
    context = {
      subscriptions: { push: vi.fn() },
    } as unknown as vscode.ExtensionContext;
    vi.clearAllMocks();
  });

  it('registers the helloWorld command', () => {
    activate(context);

    expect(vscode.commands.registerCommand).toHaveBeenCalledWith(
      'extension.helloWorld',
      expect.any(Function)
    );
    expect(context.subscriptions.push).toHaveBeenCalled();
  });

  it('shows a message when the command runs', () => {
    activate(context);

    const handler = (vscode.commands.registerCommand as ReturnType<typeof vi.fn>).mock.calls[0][1];
    handler();

    expect(vscode.window.showInformationMessage).toHaveBeenCalledWith(
      'Hello World from your extension!'
    );
  });
});

describe('deactivate', () => {
  it('does not throw', () => {
    expect(() => deactivate()).not.toThrow();
  });
});
