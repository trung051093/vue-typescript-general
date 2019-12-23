import { Module } from 'vuex';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

export const state: {} = {
};

const namespaced: boolean = true;

export const appointment: Module<{}, {}> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};

export const APPOINTMENT_NAMESPACE = 'example';
