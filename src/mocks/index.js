import { Users } from "./user";

export const initData = () => {
    if (!localStorage.getItem('users')) {
        console.log("Enregistrement des utilisateurs...");
        localStorage.setItem('users', JSON.stringify(Users));
    } else {
        console.log("Utilisateurs déjà enregistrés :", localStorage.getItem('users'));
    }

    const keys = [
        'tokens', 'refreshTokens', 'roles', 'permissions', 'grants', 'requests',
        'leaves', 'travel', 'assets', 'clients', 'projects', 'tickets', 'holidays',
        'attendance', 'performance', 'trainings', 'reports', 'modules'
    ];

    keys.forEach(key => {
        if (!localStorage.getItem(key)) {
            localStorage.setItem(key, JSON.stringify([]));
        }
    });

    console.log("Initialisation terminée !");
};
