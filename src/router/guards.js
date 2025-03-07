import { authService } from '@/services/auth.service';

export const authGuard = (to, from, next) => {
    // Autoriser toutes les routes sans vérification d'authentification
    next();
};

export const roleGuard = (allowedRoles) => {
    return (to, from, next) => {
        // Autoriser l'accès à toutes les routes sans vérifier le rôle
        next();
    };
};

export const permissionGuard = (requiredPermission) => {
    return (to, from, next) => {
        // Autoriser l'accès à toutes les routes sans vérifier les permissions
        next();
    };
};