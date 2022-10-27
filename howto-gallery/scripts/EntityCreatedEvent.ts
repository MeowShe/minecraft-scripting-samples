import * as mc from "@minecraft/server";

/**
 * Registers and contains an entity created event handler.
 * @param {(message: string, status?: number) => void} log: Logger function. If status is positive, test is a success. If status is negative, test is a failure.
 * @param {mc.Location} location Location to center this sample code around.
 * @see https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/entitycreateeventsignal#subscribe
 * @see https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/entitycreateevent
 */
// @ts-ignore
export function runEntityCreatedEvent(log: (message: string, status?: number) => void, targetLocation: mc.Location) {
  // register a new function that is called when a new entity is created.
  mc.world.events.entityCreate.subscribe((entityEvent: mc.EntityCreateEvent) => {
    if (entityEvent && entityEvent.entity) {
      log(`New entity of type '${entityEvent.entity}' created!`, 1);
    } else {
      log(`The entity event didn't work as expected.`, -1);
    }
  });
}

/**
 * A simple function to create a horse.
 * @param {(message: string, status?: number) => void} log: Logger function. If status is positive, test is a success. If status is negative, test is a failure.
 * @param {mc.Location} location Location to center this sample code around.
 * @see https://learn.microsoft.com/minecraft/creator/scriptapi/minecraft/server/dimension#spawnentity
 */
export function createOldHorse(log: (message: string, status?: number) => void, targetLocation: mc.Location) {
  const overworld = mc.world.getDimension("overworld");

  log("Create a horse and triggering the 'ageable_grow_up' event, ensuring the horse is created as an adult");
  overworld.spawnEntity("minecraft:horse<minecraft:ageable_grow_up>", targetLocation);
}
