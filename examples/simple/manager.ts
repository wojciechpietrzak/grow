import { inject } from "../../mod.ts";
import type { IAccess, IManager, Item } from "./contract.ts";

export class Manager implements IManager {

    @inject("Access")
    private access!: IAccess;

    public async listItems(): Promise<Item[]> {
        const item1 = await this.access.getItem("test1");
        const item2 = await this.access.getItem("test2");

        return [
            item1,
            item2
        ];
    }
}
