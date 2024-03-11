export function getRootPartFromCharacter(character: Model) {
	const humanoid = character.FindFirstChildOfClass("Humanoid");
	return humanoid?.RootPart;
}

export function getHumanoidFromPlayer(player: Player) {
	const character = player.Character;
	if (!character) return;

	return character.FindFirstAncestorOfClass("Humanoid");
}

export function getRootPartFromPlayer(player: Player) {
	const character = player.Character;
	if (!character) return;

	return getRootPartFromCharacter(character);
}

export function awaitCharacter(player: Player) {
	return player.Character || player.CharacterAdded.Wait()[0];
}

export function awaitHumanoidFromCharacter(character: Model) {
	let humanoid;

	do {
		humanoid = character.FindFirstChildOfClass("Humanoid");
		if (!humanoid) {
			character.ChildAdded.Wait();
		}
	} while (!humanoid);

	return humanoid;
}

export function awaitHumanoidFromPlayer(player: Player) {
	const character = awaitCharacter(player);

	let humanoid;

	do {
		humanoid = character.FindFirstChildOfClass("Humanoid");
		if (!humanoid) {
			character.ChildAdded.Wait();
		}
	} while (!humanoid);

	return humanoid;
}

export function awaitAnimatorFromHumanoid(humanoid: Humanoid) {
	let animator;

	do {
		animator = humanoid.FindFirstChildOfClass("Animator");
		if (!animator) {
			humanoid.ChildAdded.Wait();
		}
	} while (!animator);

	return animator;
}

export function awaitAnimatorFromCharacter(character: Model) {
	const humanoid = awaitHumanoidFromCharacter(character);

	let animator;

	do {
		animator = humanoid.FindFirstChildOfClass("Animator");
		if (!animator) {
			humanoid.ChildAdded.Wait();
		}
	} while (!animator);

	return animator;
}

export function awaitAnimatorFromPlayer(player: Player) {
	const humanoid = awaitHumanoidFromPlayer(player);

	let animator;

	do {
		animator = humanoid.FindFirstChildOfClass("Animator");
		if (!animator) {
			humanoid.ChildAdded.Wait();
		}
	} while (!animator);

	return animator;
}

export function awaitRootPartFromHumanoid(humanoid: Humanoid) {
	let root;

	do {
		root = humanoid.RootPart;
		if (!root) {
			humanoid.GetPropertyChangedSignal("RootPart").Wait();
		}
	} while (!root);

	return root;
}

export function awaitRootPartFromCharacter(character: Model) {
	const humanoid = awaitHumanoidFromCharacter(character);

	let root;

	do {
		root = humanoid.RootPart;
		if (!root) {
			humanoid.GetPropertyChangedSignal("RootPart").Wait();
		}
	} while (!root);

	return root;
}

export function awaitRootPartFromPlayer(player: Player) {
	const humanoid = awaitHumanoidFromPlayer(player);

	let root;

	do {
		root = humanoid.RootPart;
		if (!root) {
			humanoid.GetPropertyChangedSignal("RootPart").Wait();
		}
	} while (!root);

	return root;
}
