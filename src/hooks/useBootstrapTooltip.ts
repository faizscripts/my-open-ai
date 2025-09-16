import { useEffect } from 'react';

declare const bootstrap: {
    Tooltip: new (el: Element, options?: Record<string, unknown>) => {
        dispose: () => void;
    };
};

export function useBootstrapTooltip(deps: unknown[] = []): void {
    useEffect(() => {
        const tooltipTriggerList = document.querySelectorAll<HTMLElement>(
            '[data-bs-toggle="tooltip"]'
        );

        const tooltips = Array.from(tooltipTriggerList).map(
            (el: HTMLElement) => new bootstrap.Tooltip(el)
        );

        return (): void => {
            tooltips.forEach((tooltip: { dispose: () => void }) => tooltip.dispose());
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}
