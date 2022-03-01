import { SubstrateEvent } from "@subql/types";
import { uploadLoainPosition, transferLoan, liquidateUnsafeCDP, updateParams, closeByDex } from "../handlers";

export async function handleParamsUpdated(event: SubstrateEvent): Promise<void> {
	await updateParams(event, 'cdp');
}

export async function handleLiquidateUnsafeCDP(event: SubstrateEvent): Promise<void> {
	await liquidateUnsafeCDP(event);
}

export async function handleCloseCDPInDebitByDEX(event: SubstrateEvent): Promise<void> {
	await closeByDex(event);
}

export async function handlePositionUpdated(event: SubstrateEvent): Promise<void> {
	await uploadLoainPosition(event, false);
}

export async function handleConfiscateCollateralAndDebit(event: SubstrateEvent): Promise<void> {
	await uploadLoainPosition(event, true);
}

export async function handleTransferLoan(event: SubstrateEvent): Promise<void> {
	await transferLoan(event);
}