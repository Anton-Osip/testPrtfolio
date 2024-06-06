type FontPropsType = {
	family?: string
	weight?: number
	color?: string
	lineHeight?: number
	Fmin?: number
	Fmax?: number
}

export const font = ({
	family,
	weight,
	color,
	lineHeight,
	Fmax,
	Fmin,
}: FontPropsType) =>
	`font-family:${family || 'Poppins'};
	font-weight:${weight || 400};
	line-height:${lineHeight || 1.2};
	color:${color || '#fff'};
	font-size:calc( (100vw - 360px)/(1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px );
`
