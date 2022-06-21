function openInNewTab(url: string) {
  if (typeof window !== 'undefined') {
    window.open(url, '_blank');
  }
}

export async function copyToClipboard(url: string) {
  if (typeof window !== 'undefined') {
    await window.navigator.clipboard.writeText(url);
    window.alert('URL이 클립보드에 복사되었습니다.');
  }
}

export function shareByTwitter(url: string) {
  openInNewTab(`https://twitter.com/intent/tweet?text=${url}`);
}

export function shareByFacebook(url: string, facebookAppId: string) {
  openInNewTab(
    `https://www.facebook.com/dialog/share?display=popup&href=${url}&app_id=${facebookAppId}`,
  );
}

export function shareByLinkedIn(url: string) {
  openInNewTab(
    `https://www.linkedin.com/sharing/share-offsite/?mini=true&url=${url}`,
  );
}
