<script>
import Icon from "@iconify/svelte";
import PrimaryBtn from "../PrimaryBtn.svelte"
import {
    tab1data
} from '../../stores';
import {
    handleEvent
} from "./utils"
import TabHeader from "./TabHeader.svelte";

export let tab1val
export let mobile


tab1data.subscribe(val => tab1val = val)

let name = tab1val.name
let description = tab1val.description

const handleChange = (e) => {
    const id = e.target.id
    const val = e.target.value

    if (id === "name") {
        $tab1data.name = val
    } else {
        $tab1data.description = val
    }

}
</script>

<div >
    <TabHeader title={"Tab 1"} subtitle={"Something about tab 1"} />
    <div >
        <div style="width:100%">
            <h3 class="mt-1">Name</h3>
            <input
                id="name"
                placeholder="My awesome project"
                value={name ? name : null}
                on:change={handleChange}
                />
        </div>
        <h3 class="mt-1">Description</h3>
        <div class="textarea-header">
            {#if mobile}
                <div></div>
            {:else}
 <section class="text-icons-container">
                <div class="text-icon">
                    <Icon icon="bx:bold" height={20} />
                </div>
                <div class="text-icon">
                    <Icon icon="bx:italic" height={19} />
                </div>
                <div class="text-icon">
                    <Icon icon="ant-design:underline-outlined" height={20} />
                </div>
                <div style="width: 8px;" />
                <div class="text-icon">
                    <Icon icon="ooui:underline-a" height={16} />
                    <Icon icon="akar-icons:chevron-down" height={14} />
                </div>
            </section>
            <section class="text-type-container">
                <div>
                    <span style="font-weight: 300; font-size:16px">Normal Text</span>
                </div>
                <div class="text-icon">
                    <Icon icon="akar-icons:chevron-down" height={18} />
                </div>
            </section>
            <section class="alignment-container">
                <div class="alignment-icon">
                    <Icon icon="akar-icons:text-align-left" height={18} />
                </div>
                <div class="alignment-icon">
                    <Icon icon="akar-icons:text-align-center" height={18} />
                </div>
                <div class="alignment-icon">
                    <Icon icon="akar-icons:text-align-right" height={18} />
                </div>
            </section>
            <section class="menu-icon-container">
                <div class="text-icon">
                    <Icon icon="carbon:overflow-menu-vertical" height={22} />
                </div>
            </section>
            {/if}
           
        </div>
        <textarea
            id="description"
            rows="4"
            placeholder="My awesome project it´s ..."
            value={description ? description : null}
            on:change={handleChange}
            />
            </div>
            </div>

<style>
textarea {
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}

.menu-icon-container {
    display: flex;
    height: 100%;
    width: 6%;
    justify-content: center;
    align-items: center;
}

.alignment-icon {
    width: 33.3%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.alignment-container {
    display: flex;
    width: 20%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    border-right: 1px solid var(--form-element-border-color);
}

.text-type-container {
    display: flex;
    width: 34%;
    height: 100%;
    align-items: center;
    justify-content: space-between;
    border-right: 1px solid var(--form-element-border-color);
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

.text-icons-container {
    display: flex;
    width: 40%;
    height: 100%;
    justify-content: start;
    align-items: center;
    border-right: 1px solid var(--form-element-border-color);
}

.text-icon {
    display: flex;
    height: 100%;
    width: 1.8rem;
    justify-content: center;
    align-items: center;
}

.textarea-header {
    display: flex;
    width: 100%;
    height: 1.6rem;
    border: 1px solid var(--form-element-border-color);
    border-bottom: none;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    margin-top: 3px;
}
</style>
