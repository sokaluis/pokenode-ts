import { expect, it, beforeAll, describe, expectTypeOf } from 'vitest';
import {
  Move,
  MoveAilment,
  MoveBattleStyle,
  MoveCategory,
  MoveDamageClass,
  MoveLearnMethod,
  MoveTarget,
  NamedAPIResourceList,
} from '../models';
import { MoveClient } from '../clients';
import {
  MoveAilmtents,
  MoveBattleStyles,
  MoveCategories,
  MoveDamageClasses,
  MoveLearnMethods,
  MoveTargets,
} from '../constants';

describe('Move Client', () => {
  let client: MoveClient;
  beforeAll(() => {
    client = new MoveClient();
  });

  // Move Client
  it('check if the move client was instantiated correctly', () => {
    expectTypeOf(client).toEqualTypeOf<MoveClient>();
  });

  // Move
  it('check if it returns a move passing an ID', async () => {
    const data = await client.getMoveById(1);

    expectTypeOf(data).toEqualTypeOf<Move>();
    expect(data.name).toBe('pound');
  });

  it('check if it returns a move passing a name', async () => {
    const data = await client.getMoveByName('pound');

    expectTypeOf(data).toEqualTypeOf<Move>();
    expect(data.name).toBe('pound');
  });

  it('check if it returns a list of moves', async () => {
    const data = await client.listMoves();

    expectTypeOf(data).toEqualTypeOf<NamedAPIResourceList>();
    expect(data.results.length).toBeGreaterThan(0);
  });

  // Move Ailment
  it('check if it returns a move ailment passing an ID', async () => {
    const data = await client.getMoveAilmentById(MoveAilmtents.CONFUSION);

    expectTypeOf(data).toEqualTypeOf<MoveAilment>();
    expect(data.id).toBe(6);
  });

  it('check if it returns a move ailment passing a name', async () => {
    const data = await client.getMoveAilmentByName('confusion');

    expectTypeOf(data).toEqualTypeOf<MoveAilment>();
    expect(data.id).toBe(MoveAilmtents.CONFUSION);
  });

  it('check if it returns a list of move ailments', async () => {
    const data = await client.listMoveAilments();

    expectTypeOf(data).toEqualTypeOf<NamedAPIResourceList>();
    expect(data.results.length).toBeGreaterThan(0);
  });

  // Move Battle Style
  it('check if it returns a move battle style passing an ID', async () => {
    const data = await client.getMoveBattleStyleById(MoveBattleStyles.ATTACK);

    expectTypeOf(data).toEqualTypeOf<MoveBattleStyle>();
    expect(data.id).toBe(1);
  });

  it('check if it returns a move battle style ailment passing a name', async () => {
    const data = await client.getMoveBattleStyleByName('attack');

    expectTypeOf(data).toEqualTypeOf<MoveBattleStyle>();
    expect(data.id).toBe(MoveBattleStyles.ATTACK);
  });

  it('check if it returns a list of move battle styles', async () => {
    const data = await client.listMoveBattleStyles();

    expectTypeOf(data).toEqualTypeOf<NamedAPIResourceList>();
    expect(data.results.length).toBeGreaterThan(0);
  });

  // Move Category
  it('check if it returns a move category passing an ID', async () => {
    const data = await client.getMoveCategoryById(MoveCategories.DAMAGE);

    expectTypeOf(data).toEqualTypeOf<MoveCategory>();
    expect(data.name).toBe('damage');
  });

  it('check if it returns a move category passing a name', async () => {
    const data = await client.getMoveCategoryByName('damage+heal');

    expectTypeOf(data).toEqualTypeOf<MoveCategory>();
    expect(data.id).toBe(MoveCategories.DAMAGE_HEAL);
  });

  it('check if it returns a list of move categories', async () => {
    const data = await client.listMoveCategories();

    expectTypeOf(data).toEqualTypeOf<NamedAPIResourceList>();
    expect(data.results.length).toBeGreaterThan(0);
  });

  // Move Damage Class
  it('check if it returns a move damage class passing an ID', async () => {
    const data = await client.getMoveDamageClassById(MoveDamageClasses.PHYSICAL);

    expectTypeOf(data).toEqualTypeOf<MoveDamageClass>();
    expect(data.name).toBe('physical');
  });

  it('check if it returns a move damage class passing a name', async () => {
    const data = await client.getMoveDamageClassByName('special');

    expectTypeOf(data).toEqualTypeOf<MoveDamageClass>();
    expect(data.id).toBe(MoveDamageClasses.SPECIAL);
  });

  it('check if it returns a list of move damage classes', async () => {
    const data = await client.listMoveCategories();

    expectTypeOf(data).toEqualTypeOf<NamedAPIResourceList>();
    expect(data.results.length).toBeGreaterThan(0);
  });

  // Move Learn Method
  it('check if it returns a move learn method passing an ID', async () => {
    const data = await client.getMoveLearnMethodById(MoveLearnMethods.MACHINE);

    expectTypeOf(data).toEqualTypeOf<MoveLearnMethod>();
    expect(data.name).toBe('machine');
  });

  it('check if it returns a move learn method passing a name', async () => {
    const data = await client.getMoveLearnMethodByName('machine');

    expectTypeOf(data).toEqualTypeOf<MoveLearnMethod>();
    expect(data.id).toBe(MoveLearnMethods.MACHINE);
  });

  it('check if it returns a list of move learn methods', async () => {
    const data = await client.listMoveLearnMethods();

    expectTypeOf(data).toEqualTypeOf<NamedAPIResourceList>();
    expect(data.results.length).toBeGreaterThan(0);
  });

  // Move Target
  it('check if it returns a move target passing an ID', async () => {
    const data = await client.getMoveTargetById(MoveTargets.ALLY);

    expectTypeOf(data).toEqualTypeOf<MoveTarget>();
    expect(data.name).toBe('ally');
  });

  it('check if it returns a move target passing a name', async () => {
    const data = await client.getMoveTargetByName('ally');

    expectTypeOf(data).toEqualTypeOf<MoveTarget>();
    expect(data.id).toBe(MoveTargets.ALLY);
  });

  it('check if it returns a list of move targets', async () => {
    const data = await client.listMoveTargets();

    expectTypeOf(data).toEqualTypeOf<NamedAPIResourceList>();
    expect(data.results.length).toBeGreaterThan(0);
  });

  it('check if it returns a list of move targets', async () => {
    const data = await client.listMoveDamageClasses();

    expectTypeOf(data).toEqualTypeOf<NamedAPIResourceList>();
    expect(data.results.length).toBeGreaterThan(0);
  });
});
