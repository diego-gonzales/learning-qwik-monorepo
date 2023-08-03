import { type Signal, createContextId } from '@builder.io/qwik';

export const CAT_CTX = createContextId<Signal<boolean>>('cat-context');
