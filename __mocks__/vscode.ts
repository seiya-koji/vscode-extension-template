import { vi } from 'vitest';

const commands = {
  registerCommand: vi.fn(() => ({ dispose: vi.fn() })),
};

const window = {
  showInformationMessage: vi.fn(),
};

export { commands, window };
