import React from 'react'
import * as bootstrapIcons from 'react-bootstrap-icons';

interface BootstrapIconProps extends React.SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
}

interface Props extends BootstrapIconProps {
    // Cannot simply use "name" as it is a valid SVG attribute
    // "iconName", "filename", "icon"... will do it instead
    iconName: keyof typeof bootstrapIcons;
}

export function Icon({ iconName, ...props }: Props) {
    const BootstrapIcon = bootstrapIcons[iconName];
    return <BootstrapIcon {...props} />;
}