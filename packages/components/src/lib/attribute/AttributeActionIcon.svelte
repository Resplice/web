<script lang="ts">
	import { AttributeAction } from '@resplice/utils'
	import CalendarIcon from '$lib/icons/CalendarIcon.svelte'
	import CallIcon from '$lib/icons/CallIcon.svelte'
	import ClipboardIcon from '$lib/icons/ClipboardIcon.svelte'
	import MailIcon from '$lib/icons/MailIcon.svelte'
	import SocialIcon from '$lib/icons/SocialIcon.svelte'
	import LocateIcon from '$lib/icons/LocateIcon.svelte'
	import NavigateIcon from '$lib/icons/NavigateIcon.svelte'
	import ChatboxIcon from '$lib/icons/ChatboxIcon.svelte'

	const width = 24
	const height = 24
	export let attributeAction: AttributeAction
	export let iconProps: Record<string, any> = {}
</script>

{#if attributeAction === AttributeAction.Calendar}
	<CalendarIcon {width} {height} {...iconProps} />
{:else if attributeAction === AttributeAction.Call}
	<CallIcon {width} {height} {...iconProps} />
{:else if attributeAction === AttributeAction.Copy}
	<ClipboardIcon {width} {height} {...iconProps} />
{:else if attributeAction === AttributeAction.Email}
	<MailIcon {width} {height} {...iconProps} />
{:else if attributeAction === AttributeAction.Link}
	<SocialIcon {width} {height} network={iconProps.network || 'other'} />
{:else if attributeAction === AttributeAction.Locate}
	<LocateIcon {width} {height} {...iconProps} />
{:else if attributeAction === AttributeAction.Navigate}
	<NavigateIcon {width} {height} {...iconProps} />
{:else if attributeAction === AttributeAction.Sms}
	<ChatboxIcon {width} {height} {...iconProps} />
{/if}
