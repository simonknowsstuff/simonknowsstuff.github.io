
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>
		};
		Pathname(): "/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.svg" | "/images/banner.jpeg" | "/images/banners/gfm-banner.jpeg" | "/images/banners/medisukham-banner.jpeg" | "/images/banners/partify-banner.jpeg" | "/images/expertise.webp" | "/images/icons/email.svg" | "/images/icons/link.svg" | "/images/icons/location.svg" | "/images/profile.jpeg";
	}
}