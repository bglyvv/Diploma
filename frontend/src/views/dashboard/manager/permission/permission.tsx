import { hasPermission } from 'ui-services/permission.ui-service';

type PermissionProps = {
    access: string;
};

export const Permission: React.FC<PermissionProps> = ({ access, children }) => {
    if (hasPermission(access)) return <>{children}</>;
    return null;
};
