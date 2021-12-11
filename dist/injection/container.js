"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parse_function_1 = __importDefault(require("parse-function"));
const parseFunc = parse_function_1.default({
    ecmaVersion: 2017
});
class DiContainer {
    constructor() {
        this.dependencies = {};
        this.factories = {};
        this.register = (name, dependency) => {
            this.dependencies[name] = dependency;
        };
        this.factory = (name, factory) => {
            this.factories[name] = factory;
        };
        this.get = (name) => {
            if (!this.dependencies[name]) {
                const factory = this.factories[name];
                this.dependencies[name] = factory && this.inject(factory);
                if (!this.dependencies[name])
                    throw new Error(`Cannot find module ${name}`);
            }
            return this.dependencies[name];
        };
        this.inject = (factory) => {
            const fnArgs = parseFunc.parse(factory).args
                .map(dependency => this.get(dependency));
            // eslint-disable-next-line prefer-spread
            return factory.apply(null, fnArgs);
        };
        this.dependencies = {};
        this.factories = {};
    }
}
exports.default = DiContainer;
//# sourceMappingURL=container.js.map