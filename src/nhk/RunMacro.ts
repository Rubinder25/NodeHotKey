import { MacroStepType } from '../../types/nhk-types';
import { pressKey, releaseKey, click, type, paste } from '../utils/KeyboardMouse';
import { setClipboardText, getClipboardText } from '../utils/Clipboard';
import { KEYCODES } from '../utils/Keycodes';
import { wait } from '../utils/Wait';
import { matchCurrentWindowTitle } from '../utils/Window';

export function runMacro(steps: MacroStepType[]) {

    steps.forEach((step) => {
        if (step.pressKey !== undefined) {
            let keyCode = step.pressKey;
            pressKey(keyCode);
        }

        if (step.releaseKey !== undefined) {
            let keyCode = step.releaseKey;
            releaseKey(keyCode);
        }

        if (step.type !== undefined) {
            let s = step.type;
            type(s);
        }

        if (step.click !== undefined) {
            click(step.click);
        }

        if (step.wait !== undefined) {
            let delay = step.wait;
            wait(delay);
        }

        if (step.paste !== undefined) {
            let text = step.paste;
            paste(text);
        }

        if (step.func !== undefined) {
            step.func({ pressKey, releaseKey, click, type, paste, wait, setClipboardText, getClipboardText, matchCurrentWindowTitle });
        }

    });
}