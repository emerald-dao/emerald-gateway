<script>
import {
    modal,
    twitterVerif
} from "$lib/stores";
import Icon from "@iconify/svelte"
import HorizontalSpace from "$lib/components/HorizontalSpace.svelte";

export let accounts
export let mobile
let accountHandle = ""
let TwitterVerif
twitterVerif.subscribe(val => TwitterVerif = val)

function handleSelection(i) {
    $twitterVerif.selectedId = i
    $modal.content = "twitter"
    $twitterVerif.editing = true
    $modal.opened = true

}

function removeAccount(id) {
    $twitterVerif.accounts = $twitterVerif.accounts.filter(function(value, index, arr) {
        if (value.id != id) return value;
    });
}

function handleAddAccount() {
    $twitterVerif.accounts = [...$twitterVerif.accounts, {
        id: TwitterVerif.accounts.length,
        label: accountHandle,
    }];
    accountHandle = ""
    //odal.content = "twitter-verif"
    // openModal()
}
</script>

<h3 class="mt-2">Twitter Accounts</h3>
<div class="account-input-container">
    <input placeholder="@AccountHandle" bind:value={accountHandle} />

    <button on:click={handleAddAccount} style="width:{mobile ? "20%" : "50%"}" class="add-button twitter-inactive flex-align mt-0">
       {#if !mobile}
        <span>Add Account</span>
        {/if}
        <div style="{mobile ? "margin-left:0rem" : "margin-left: 0.3rem"}" class="flex-align">
            <Icon icon="ant-design:plus-circle-twotone" height="{mobile ? "2.5rem" : "1.6rem"}"/>
                </div>
                </button>
                </div>
                <ul class="mt-2">
                    {#each TwitterVerif.accounts as account, i}
                    <li class="account-container" >
                        <div class="account" on:click={() => handleSelection(i)}>
                            <div style="display: flex;">
                                <span style="color: #1DA1F2;">@</span>
                                <HorizontalSpace value="0.2rem" />
                                 <span style="color: white;">
                                    {account.label}
                                </span>

                            </div>
                            <div class="edit-icon-container">
                                <Icon color="white" icon="akar-icons:edit" />

                            </div>
                        </div>
                        <div class="icon-container flex-align" on:click={() => removeAccount(account.id)}>
                            <Icon height="80%" icon="ant-design:minus-circle-twotone" />
                        </div>
                    </li>
                    {/each}
                </ul>

    
    <style>
input:focus {
    border-color: #1DA1F2;
}

.twitter-active {
    color: white;
    border-color: #1DA1F2;
    background: #1DA1F2;
}

.twitter-inactive {
    color: #1DA1F2;
    border-color: #1DA1F2;
    background: transparent;
    cursor: pointer;
}

.add-button {
    margin-left: 1rem;
    height: 3rem;
}

.account-input-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.edit-icon-container {
    position: absolute;
    top: -0.8rem;
    right: -0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1DA1F2;
    border-radius: 100px;
    height: 1.4rem;
    width: 1.4rem;
    padding: 0.2rem;
}

.edit-icon-container:hover {
    cursor: pointer;
}

ul {
    list-style-type: none;
    width: 100%;

    margin-top: 0.9rem;
    padding: 0;
}

li {
    display: flex;
    height: 3rem;
    margin-top: 1rem;
    padding: 0;
}

.icon-container {
    height: 100%;
    color: lightslategrey;
}

.icon-container:hover {
    color: red;
    cursor: pointer;
}

.account-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #1DA1F2;

}

.account-container:hover {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #1DA1F2;
    background-color: rgba(29 ,161, 242, 0.1);
    border-radius: 12px;
}

.account {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    background: #252E37;
    width: 50%;
    border-radius: 9px;
    height: 100%;
}

.account:hover {
    cursor: pointer;
}
</style>
