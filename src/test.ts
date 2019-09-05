import { pathOf, pathOf3, hasPath } from ".";

declare var console: any;

{
    const a = { x: 10 };
    const r1 = pathOf(a, 'x');
    console.assert(r1.join() === ['x'].join(), 'a');
    
    const b = { x: a };
    const r2 = pathOf(b, 'x');
    console.assert(r2.join() === ['x'].join(), 'b');
    
    const c = { z: { y: { bb: 123 }}};
    const r3: pathOf3<typeof c, 'z', 'y', 'bb'> = pathOf(c, 'z', 'y', 'bb');
    console.assert(r3.join() === ['z', 'y', 'bb'].join(), 'c');
    
    const d = {x: [{b: 123},{b:456}] as const};
    const r4 = pathOf(d, 'x', 1, 'b');
    console.assert(r4.join() === ['x', 1, 'b'].join(), 'd');
    
    const e = {x: [{b: 123}] as const};
    const r5 = pathOf(e, 'x', 0, 'b');
    console.assert(r5.join() === ['x', 0, 'b'].join(), 'e');
    
    const z = { z: { y: { bb: 123 }}, h: { m: { f: 123 }}};
    const r6: pathOf3<typeof z, 'h', 'm', 'f'> = pathOf(z, 'h', 'm', 'f');
    console.assert(r6.join() === ['h', 'm', 'f'].join(), 'z');
}

// -------

{
    const a = { x: 10 };
    console.assert(hasPath(a, 'x'), 'a');

    const b = { x: a };
    console.assert(hasPath(b, 'x'), 'b');

    const c = { z: { y: { bb: 123 }}};
    console.assert(hasPath(c, 'z', 'y', 'bb'), 'c');

    const d = {x: [{b: 123},{b:456}] as const};
    console.assert(hasPath(d, 'x', 1, 'b'), 'd');

    const e = {x: [{b: 123}] as const};
    console.assert(hasPath(e, 'x', 0, 'b'), 'e');

    const z = { z: { y: { bb: 123 }}, h: { m: { f: 123 }}};
    console.assert(hasPath(z, 'h', 'm', 'f'), 'z');
}
