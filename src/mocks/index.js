import { Users } from "./user";

export const initData = () => {
    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify(Users));
    }
    if (!localStorage.getItem('tokens')) {
        localStorage.setItem('tokens', JSON.stringify([]));
    }
    if (!localStorage.getItem('refreshTokens')) {
        localStorage.setItem('refreshTokens', JSON.stringify([]));
    }
    if (!localStorage.getItem('roles')) {
        localStorage.setItem('roles', JSON.stringify([]));
    }
    if (!localStorage.getItem('permissions')) {
        localStorage.setItem('permissions', JSON.stringify([]));
    }
    if (!localStorage.getItem('grants')) {
        localStorage.setItem('grants', JSON.stringify([]));
    }
    if (!localStorage.getItem('requests')) {
        localStorage.setItem('requests', JSON.stringify([]));
    }
    if (!localStorage.getItem('leaves')) {
        localStorage.setItem('leaves', JSON.stringify([]));
    }
    if (!localStorage.getItem('travel')) {
        localStorage.setItem('travel', JSON.stringify([]));
    }
    if (!localStorage.getItem('assets')) {
        localStorage.setItem('assets', JSON.stringify([]));
    }
    if (!localStorage.getItem('clients')) {
        localStorage.setItem('clients', JSON.stringify([]));
    }
    if (!localStorage.getItem('projects')) {
        localStorage.setItem('projects', JSON.stringify([]));
    }
    if (!localStorage.getItem('tickets')) {
        localStorage.setItem('tickets', JSON.stringify([]));
    }
    if (!localStorage.getItem('holidays')) {
        localStorage.setItem('holidays', JSON.stringify([]));
    }
    if (!localStorage.getItem('attendance')) {
        localStorage.setItem('attendance', JSON.stringify([]));
    }
    if (!localStorage.getItem('performance')) {
        localStorage.setItem('performance', JSON.stringify([]));
    }
    if (!localStorage.getItem('trainings')) {
        localStorage.setItem('trainings', JSON.stringify([]));
    }
    if (!localStorage.getItem('reports')) {
        localStorage.setItem('reports', JSON.stringify([]));
    }
    if (!localStorage.getItem('roles')) {
        localStorage.setItem('roles', JSON.stringify([]));
    }
    if (!localStorage.getItem('permissions')) {
        localStorage.setItem('permissions', JSON.stringify([]));
    }
    if (!localStorage.getItem('modules')) {
        localStorage.setItem('modules', JSON.stringify([]));
    }
    if (!localStorage.getItem('grants')) {
        localStorage.setItem('grants', JSON.stringify([]));
    }
    if (!localStorage.getItem('requests')) {
        localStorage.setItem('requests', JSON.stringify([]));
    }
    if (!localStorage.getItem('leaves')) {
        localStorage.setItem('leaves', JSON.stringify([]));
    }

}