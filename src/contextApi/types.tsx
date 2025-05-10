import { ReactNode } from "react";

export type Tudo = {
    user: DateUser;
    logado: boolean;
    AddAgenda: ({
        name,
        service,
        date,
        valor,
    }: {
        name: string;
        service: string;
        date: string;
        valor: string;
    }) => Promise<void>;
    Login: ({
        email, password }: { email: string; password: string; }) => Promise<void>;
    agendas: Agenda[];
    DeleteAgenda: (uid: string) => Promise<void>;
};

export type DateUser = {
    email: string | null;
    uid: string | null;
};

export type Agenda = {
    uid: string;
    name: string;
    service: string;
    date: string;
    valor: string;
};

export type Children = {
    children: React.ReactNode;
};